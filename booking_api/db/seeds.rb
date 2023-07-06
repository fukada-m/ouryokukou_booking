# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
#
SAMPLE_TESTS = [
	{
		name: 'Going around the world',
	},
	{
		name: 'graduating from college',
	}
]

SAMPLE_TESTS.each do |test|
	Test.find_or_create_by(test)
end

TABLES = [
	{ name: '1番' },
	{ name: '2番' },
	{	name: '3番' },
	{	name: '5番' },
	{	name: '11番' },
	{ name: '12番' },
	{	name: '13番' },
	{	name: '14番' },
	{	name: '15番' },
	{	name: '16番' },
	{	name: '21番' }
]

TABLES.each { |table| Table.find_or_create_by(table)}

CATEGORYS = [
	{ name: 'LINE' },
	{ name: '電話' },
]

CATEGORYS.each { |category| BookingCategory.find_or_create_by(category) }

