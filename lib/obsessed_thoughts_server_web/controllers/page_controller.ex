defmodule ObsessedThoughtsServerWeb.PageController do
  use ObsessedThoughtsServerWeb, :controller

  def index(conn, _params) do
    json(conn, "you lost there buddy? :) ")
  end

  def redirect_test(conn, _params) do
    json(conn, %{id: "I gotchu buddy"})
  end
end
