defmodule ObsessedThoughtsServer.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :username, :string
    field :email, :string
    field :password, :string, virtual: true
    field :password_hash, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username], :password)
    |> validate_required([:username, :password])
    |> unique_constraint(:username)
    |> validate_length(:password, min: 6, max: 100)
  end
end
