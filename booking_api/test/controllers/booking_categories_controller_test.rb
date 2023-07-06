require "test_helper"

class BookingCategoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get get_categories" do
    get booking_categories_get_categories_url
    assert_response :success
  end
end
