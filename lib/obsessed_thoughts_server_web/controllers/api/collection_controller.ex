defmodule ObsessedThoughtsServerWeb.API.CollectionController do
  use ObsessedThoughtsServerWeb, :controller
  alias Bot.Twitter, as: Bot

  def index(conn, _params) do
    # TODO: Call bot logic
    Bot.search()
    # TODO: Bot.Twitter.retrieve()

    json(conn, %{user: "hey there you beautiful authorized user"})
  end
end
