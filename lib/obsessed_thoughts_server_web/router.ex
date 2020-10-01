defmodule ObsessedThoughtsServerWeb.Router do
  use ObsessedThoughtsServerWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  # ROUTES
  # Responsible for rendering react app
  scope "/", ObsessedThoughtsServerWeb do
    pipe_through :browser

    get "/", LayoutController, :index
    get "/login", LayoutController, :index
    get "signup", LayoutController, :index
    get "/collections", LayoutController, :index

    # template for learning about contexts
    resources "/users", UserController
  end

  # Responsible for exposing an api endpoint
  scope "/api", ObsessedThoughtsServerWeb do
    pipe_through :api

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
