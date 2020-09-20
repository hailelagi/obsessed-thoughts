defmodule ObsessedThoughtsServerWeb.Router do
  use ObsessedThoughtsServerWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug ObsessedThoughtsServerWeb.Locale,  "en"
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  # ROUTES
  # Responsible for rendering html
  scope "/", ObsessedThoughtsServerWeb do
    pipe_through :browser

    get "/", PageController, :index
    get "/hello", HelloController, :index
    get "/hello/:messenger", HelloController, :show
    get "/redirect_test", PageController, :redirect_test
    resources "/user", UserController
  end

  # Responsible for exposing an api endpoint
  scope "/api", ObsessedThoughtsServerWeb do
    pipe_through :api

    resources "/review", ReviewController
  end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: ObsessedThoughtsServerWeb.Telemetry
    end
  end
end
