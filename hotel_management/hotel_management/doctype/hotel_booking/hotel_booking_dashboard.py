from __future__ import unicode_literals
from frappe import _

def get_data():
	return {
		'fieldname': 'hotel_booking',
		'transactions': [
			{
				'label': _('Booking Transactions'),
				'items': ['Hotel Check In']
			},
		]
	}