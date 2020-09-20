defmodule ObsessedThoughtsServerWeb.LayoutController do
  use ObsessedThoughtsServerWeb, :controller

  def index(conn, _params) do
    render(conn, "app.html")
  end
end

