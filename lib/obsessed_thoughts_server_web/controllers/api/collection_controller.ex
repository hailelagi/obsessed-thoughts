defmodule ObsessedThoughtsServerWeb.API.CollectionController do
  use ObsessedThoughtsServerWeb, :controller

  alias ObsessedThoughtsServerWeb.APIAuthPlug
  alias Plug.Conn

  def index(conn, _params) do
    json(conn, %{user: "hey there you beautiful authorized user"})
  end
end
