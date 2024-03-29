# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_05_141737) do
  create_table "booking_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_booking_categories_on_name", unique: true
  end

  create_table "bookings", force: :cascade do |t|
    t.date "date"
    t.string "name"
    t.integer "number_of_adults"
    t.integer "number_of_children"
    t.text "note"
    t.integer "booking_category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "week"
    t.string "time"
    t.index ["booking_category_id"], name: "index_bookings_on_booking_category_id"
  end

  create_table "bookings_tables", force: :cascade do |t|
    t.integer "booking_id"
    t.integer "table_id"
    t.index ["booking_id"], name: "index_bookings_tables_on_booking_id"
    t.index ["table_id"], name: "index_bookings_tables_on_table_id"
  end

  create_table "tables", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_seated", default: false
    t.index ["name"], name: "index_tables_on_name", unique: true
  end

  create_table "tests", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "bookings", "booking_categories"
  add_foreign_key "bookings_tables", "bookings"
  add_foreign_key "bookings_tables", "tables"
end
