require "test_helper"

class TablesControllerTest < ActionDispatch::IntegrationTest
  test "should get get_tables" do
    get tables_get_tables_url
    assert_response :success
  end
end
