# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_kml_session',
  :secret      => '68a861dba2c2487fff4de2e250caa5de689a86abc12f8b9bfc6ce63e7f1fe9f4c8fadabc7189722f0257d03183093ea6d17777319fcd3cf7da1d1966f7b8b05f'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
