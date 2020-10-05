# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :obsessed_thoughts_server,
  ecto_repos: [ObsessedThoughtsServer.Repo]

# Configures the endpoint
config :obsessed_thoughts_server, ObsessedThoughtsServerWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "qnz3xHzdklxLVPDjGjsfHwYVnYeT2HnRKf2N6cIeNn5GYjBTzbOMrQ8Hoovwkngc",
  render_errors: [view: ObsessedThoughtsServerWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: ObsessedThoughtsServer.PubSub,
  live_view: [signing_salt: "7saIPnt0"]

# configure pow authentication
config :obsessed_thoughts_server, :pow,
  user: ObsessedThoughtsServer.Users.User,
  repo: ObsessedThoughtsServer.Repo

# configures twitter authentication
config = [
  consumer_key: "REPLACE_WITH_CONSUMER_KEY",
  consumer_secret: "REPLACE_WITH_CONSUMER_SECRET",
  redirect_uri: "http://localhost:4000/collections"
]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
