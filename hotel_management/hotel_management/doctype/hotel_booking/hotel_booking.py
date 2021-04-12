# -*- coding: utf-8 -*-
# Copyright (c) 2021, Eco Data and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class HotelBooking(Document):
	def on_submit(self):
		self.status = 'Booked'
		doc = frappe.get_doc('Hotel Booking', self.name)
		doc.db_set('status', 'Booked')

@frappe.whitelist()
def get_bookings(start, end, room):
	booking_list = frappe.db.sql("""select check_in, check_out, room_no from `tabHotel Booking Rooms` 
					where check_in = %s and check_out = %s and room_no = %s""", (start, end, room))
	if booking_list:
		frappe.throw("Selected Room not available")