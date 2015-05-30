# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Compass configurations
sass_path = dir
css_path = File.join(dir, "..", "css")
fonts_path = File.join(dir, "..", "fonts")

relative_assets = true
# Require any additional compass plugins here.
images_dir = File.join(dir, "..", "images")
environment = :development #:production
output_style = (environment == :production) ? :compressed : :expanded

