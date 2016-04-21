require 'sinatra'

get '/Home' do
	erb :index
end


get '/Products' do
	erb :products
end

get '/Locations' do
	erb :locations
end

get '/Contact' do
	erb :contact
end