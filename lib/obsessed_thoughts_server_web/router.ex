defmodule ObsessedThoughtsServerWeb.Router do
  use ObsessedThoughtsServerWeb, :router
  use Pow.Phoenix.Router
  use PowAssent.Phoenix.Router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :browser_protected do
    plug Pow.Plug.Session, otp_app: :obsessed_thoughts_server
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug ObsessedThoughtsServerWeb.APIAuthPlug, otp_app: :obsessed_thoughts_server
  end

  pipeline :api_protected do
    plug Pow.Plug.RequireAuthenticated, error_handler: ObsessedThoughtsServerWeb.APIAuthErrorHandler
  end

  scope "/" do
    pipe_through :browser
    pow_routes()
    pow_assent_routes()
  end

  # ROUTES
  # Responsible for rendering react app
  scope "/", ObsessedThoughtsServerWeb do
    pipe_through :browser

    get "/", LayoutController, :index
    get "/login", LayoutController, :index
    get "/signup", LayoutController, :index
  end

  # must be logged in to see a collection
  scope "/", ObsessedThoughtsServerWeb do
    pipe_through [:browser, :browser_protected]
    get "/collections", LayoutController, :index
  end

  # Responsible for exposing an api endpoint
  scope "/api", ObsessedThoughtsServerWeb do
    pipe_through [:api, :api_protected]
    # account user creation and authentication route
    resources "/registration", RegistrationController, singleton: true, only: [:create]
    resources "/session", SessionController, singleton: true, only: [:create, :delete]
    post "/session/renew", SessionController, :renew
  end

  # Enables LiveDashboard only for development
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: ObsessedThoughtsServerWeb.Telemetry
    end
  end
end
