defmodule ObsessedThoughtsServerWeb.HelloController do
  use ObsessedThoughtsServerWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
