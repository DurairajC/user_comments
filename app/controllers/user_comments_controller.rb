class UserCommentsController < ApplicationController
  def index
  	
  end

  def save_comment
  	
  	@comment = params[:comment]
  	@ip_address = params[:ip_address]
  	@ip_address = UDPSocket.open {|s| s.connect("64.233.187.99", 1); s.addr.last}

  	@new_comment = Comment.new

  	@comment = @comment.gsub("<u>","") if @comment
  	@comment = @comment.gsub("</u>","") if @comment

  	@new_comment.comments = @comment
  	@new_comment.ip_address = @ip_address
  	@new_comment.save

  end

  def all_comments
  	@ip_address = UDPSocket.open {|s| s.connect("64.233.187.99", 1); s.addr.last}
  	@all_comments = Comment.all.where("ip_address=?",@ip_address).order("updated_at desc")
  end

end
