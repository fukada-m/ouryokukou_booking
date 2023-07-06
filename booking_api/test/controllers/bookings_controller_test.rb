require "test_helper"

class BookingsControllerTest < ActionDispatch::IntegrationTest
  test "should get get_booking" do
    get bookings_get_booking_url
    assert_response :success
  end
end
