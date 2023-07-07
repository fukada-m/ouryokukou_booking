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

SAMPLE_BOOKINGS = [
	{
		date: '2021-07-07',
		name: 'fukada',
		number_of_adults: 2,
		number_of_children: 1,
		note: 'test',
		booking_category_id: 1,
	},
	{
		date: '2021-07-07',
		name: '佐々木',
		number_of_adults: 3,
		number_of_children: 2,
		note: 'にんじんが食べれないです。',
		booking_category_id: 2,
	},
]

SAMPLE_BOOKINGS.each { |booking| Booking.find_or_create_by(booking) }
booking = Booking.find(2)
table = Table.find(1)
unless booking.tables.include?(table)
	booking.tables << table
end

booking = Booking.find(2)
table = Table.find(4)
unless booking.tables.include?(table)
	booking.tables << table
end

booking = Booking.find(3)
table = Table.find(5)
unless booking.tables.include?(table)
	booking.tables << table
end

