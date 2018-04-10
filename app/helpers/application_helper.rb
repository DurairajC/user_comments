module ApplicationHelper

	def show_comments

		@all_comments = Comment.all.order("updated_at desc")
		if @all_comments!=nil
			
			@time_diff = 5

			@comment_arr = []
			@comment_arr << Comment.last.id
			@last_updated = Comment.last.updated_at
			@all_comments.each do |comment|
				
				@minutes = ((@last_updated - comment.updated_at) / 1.minutes).to_i

				if (@minutes >= 5)
					@comment_arr << comment.id
					@last_updated = comment.updated_at		
				end	

			end

			@comment_arr = @comment_arr.uniq

			@diff_comments = Comment.where(:id => @comment_arr).order("updated_at desc")

		end
	end

end
