get '/' do
  erb :index
end

post '/add_todo' do
	p params
	@todo = Todo.new(params[:todo])
	p @todo
end

post '/' do
	puts params
	puts params["todo"]
	@todo = Todo.new(params)
	if @todo.save
		erb :_newTodo
	else
		erb:index
	end
end