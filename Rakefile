desc "Generate ctags"
task :ctags do
  files = FileList["js/**/*.js"].select { |file|
    ! file.start_with?("js/lib")
  }
  puts "Generating ctags for files:"
  puts files
  system("jsctags #{files.join(" ")} -W debug")
  puts "Done generating ctags"
end

task :default do
  Rake::Task[:ctags].invoke
end
