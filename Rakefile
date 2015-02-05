require 'bundler/gem_tasks'
require 'qiita-markdown'
require 'fileutils'

task :prepare_dist_dir do
  FileUtils.mkdir_p('dist/html')
end

desc 'Convert src/markdown files to dist/html'
task make: :prepare_dist_dir do
  processor = Qiita::Markdown::Processor.new

  Dir.glob('src/markdown/*.md').each do |src_path|
    fname = src_path.scan(/([^\/]+)\.md$/).first.first
    markdown = File.read(src_path)
    html = processor.call(markdown)[:output]
    File.write("dist/html/#{fname}.html", html)
  end
end

task default: :make
