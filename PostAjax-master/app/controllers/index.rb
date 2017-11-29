get '/' do
  @posts = Todo.all
  erb :index
end

post '/add_todo' do
  
  post=  Todo.new(params)
  if post.save
  	#El comentario representa como enviar los datos desde back to front con JSON
  	#content_type :json
  	#params.to_json
  	erb :"_post", layout: false, locals: {post: post}
  end
  #p params 

end
