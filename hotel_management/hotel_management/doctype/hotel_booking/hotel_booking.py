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