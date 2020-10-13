defmodule Bot.Twitter do
  @moduledoc """
  defines a public interface for the twitter bot
  TODO: implement logic when api keys are granted
"""
  def login do
    # TODO: make sure user is authenticated
  end

  def search do
    # TODO: find and roll tweets

    # examples
    ExTwitter.search("elixir-lang", [count: 5])
    |> Enum.map(fn(tweet) -> tweet.text end)
    |> Enum.join("\n-----\n")
    |> IO.puts
    # return json
  end

  def create do
    # TODO: create collection of tweets
  end

  def update do
    # TODO: save//update collection to database
  end

  def retrieve do
    # TODO: get tweet data and return json
  end
end
