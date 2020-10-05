defmodule ObsessedThoughtsServerWeb.API.TwitterController do
  use ObsessedThoughtsServerWeb, :controller

  def sign_in(session_params)do
    # Redirect user to provider
    {:ok, %{url: url, session_params: session_params}} =
      Assent.Strategy.Twitter.authorize_url(config)

    # Handle callback
    {:ok, %{user: user, token: token}} =
      config
      |> Assent.Config.put(:session_params, session_params)
      |> Assent.Strategy.Twitter.callback(params)

  end
end
