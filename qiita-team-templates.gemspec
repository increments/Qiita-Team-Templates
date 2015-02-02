lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "qiita/team/templates/version"

Gem::Specification.new do |spec|
  spec.name            = 'qiita-team-templates'
  spec.version         = Qiita::Team::Templates::VERSION
  spec.authors         = ['Yuku Takahashi']
  spec.email           = ['yuku@qiita.com']
  spec.summary         = 'Shared templates for teams'
  spec.homepage        = 'https://github.com/increments/Qiita-Team-Templates'
  spec.license         = 'MIT'

  spec.add_development_dependency 'bundler', '~> 1.7'
  spec.add_development_dependency 'rake', '~> 10.0'
end
