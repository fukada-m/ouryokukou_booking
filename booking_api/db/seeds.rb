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
	{ id: 1, name: '1番' },
	{ id: 2, name: '2番' },
	{	id: 3, name: '3番' },
	{	id: 5, name: '5番' },
	{	id: 11, name: '11番' },
	{ id: 12, name: '12番' },
	{	id: 13, name: '13番' },
	{	id: 14, name: '14番' },
	{	id: 15, name: '15番' },
	{	id: 16, name: '16番' },
	{	id: 21, name: '21番' }
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
	{
		date: '2023-07-03',
		name: '深田',
		number_of_adults: 2,
		number_of_children: 0,
		note: '',
		booking_category_id: 1,
	}
]

SAMPLE_BOOKINGS.each { |booking| Booking.find_or_create_by(booking) }
booking = Booking.find(1)
table = Table.find(1)
unless booking.tables.include?(table)
	booking.tables << table
end

booking = Booking.find(1)
table = Table.find(2)
unless booking.tables.include?(table)
	booking.tables << table
end

booking = Booking.find(2)
table = Table.find(5)
unless booking.tables.include?(table)
	booking.tables << table
end

