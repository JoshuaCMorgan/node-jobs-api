# securing the App
## applications/dependencies/libraries to use
- helmet
  - 
- cors
  - ensures API is accessible from other domains
- xss-clean
  - it sanitizes the user input in `req.body`, `req.query`, and `req.params`.
  - it protexts from cross-site scripting attacks in which attacker tries to inject malicious code.
- express-rate-limit
  - limits number of requests.