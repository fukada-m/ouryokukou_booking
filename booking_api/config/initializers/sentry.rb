Sentry.init do |config|
  config.dsn = 'https://ee98bbe6a5182f0522341102953aa2d6@o4505434622066688.ingest.sentry.io/4505655226728448'
  config.breadcrumbs_logger = [:active_support_logger, :http_logger]

  # Set traces_sample_rate to 1.0 to capture 100%
  # of transactions for performance monitoring.
  # We recommend adjusting this value in production.
  config.traces_sample_rate = 1.0
  # or
  config.traces_sampler = lambda do |context|
    true
  end
end
