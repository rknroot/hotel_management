from __future__ import unicode_literals
from frappe import _

def get_data():
	return {
		'fieldname': 'guest_id',
		'transactions': [
			{
				'label': _('Booking Transactions'),
				'items': ['Hotel Booking']
			},
			{
				'label': _('Check In Transactions'),
				'items': ['Hotel Check In']
			},
		]
	}