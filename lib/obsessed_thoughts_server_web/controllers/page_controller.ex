defmodule ObsessedThoughtsServerWeb.PageController do
  use ObsessedThoughtsServerWeb, :controller

  def index(conn, _params) do
    conn
    |> put_flash(:info, "Welcome to phoenix from flash")
    |> put_flash(:error, "let's pretend we have an error")
    |> render("index.html")
  end

  def redirect_test(conn, _params) do
    json(conn, %{id: "I gotchu buddy"})
  end
end
