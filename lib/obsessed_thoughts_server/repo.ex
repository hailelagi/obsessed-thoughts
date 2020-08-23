defmodule ObsessedThoughtsServer.Repo do
  use Ecto.Repo,
    otp_app: :obsessed_thoughts_server,
    adapter: Ecto.Adapters.Postgres
end
