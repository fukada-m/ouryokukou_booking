require "test_helper"

class BookingsControllerTest < ActionDispatch::IntegrationTest
<<<<<<< HEAD
  # test "the truth" do
  #   assert true
  # end
=======
  test "should get get_booking" do
    get bookings_get_booking_url
    assert_response :success
  end
>>>>>>> origin/main
end
