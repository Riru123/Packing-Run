class ItemsController < ApplicationController
  def index
    @items = Item.all
    @item = Item.new
    @itemcount = @items.count
    @done_lists = Item.where(completed: true)
    @waiting_lists = @items.where(completed: false)
    @checked = @done_lists.count
    @percentage = (@checked.to_f / @itemcount * 100).round(1)
    @human_gage = (310 * @percentage) / 100
  end

  def show
    @item = Item.find(params[:id])
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to items_path, notice: 'Item was successfully created.'
    else
      render :new
    end
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])
    @item.update(item_params)

    redirect_to items_path(@item)
  end

  def update_status
    @item = Item.find(params[:id])
    @completed_item = @item.checked
    @completed_item.update(params.require(:item).permit(:completed))

    redirect_to items_path(@item)
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to items_path, notice: 'アイテムが削除されました。'
  end
  

  private

  def item_params
    params.require(:item).permit(:title, :completed)
  end
end