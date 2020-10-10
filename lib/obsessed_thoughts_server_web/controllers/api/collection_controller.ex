defmodule ObsessedThoughtsServerWeb.API.CollectionController do
  use ObsessedThoughtsServerWeb, :controller

  alias ObsessedThoughtsServerWeb.APIAuthPlug
  alias Plug.Conn

  def index(conn, %{"data" => access}) do
    {conn, user} = APIAuthPlug.fetch(conn, access)
    json(conn, %{omg: "#{user}"})
  end
end
