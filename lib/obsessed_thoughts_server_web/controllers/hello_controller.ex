defmodule ObsessedThoughtsServerWeb.HelloController do
  use ObsessedThoughtsServerWeb, :controller

  def index(conn, _params) do
    # conn --> struct data about req
    # params --> req parameters or queries

    render(conn, "index.html")
  end

  def show(conn, %{"messenger" => messenger}) do
    render(conn, "show.html", messenger: messenger)
  end
end
