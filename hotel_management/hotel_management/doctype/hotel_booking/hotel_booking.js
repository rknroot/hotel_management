// Copyright (c) 2021, Eco Data and contributors
// For license information, please see license.txt

frappe.ui.form.on('Hotel Booking', {
	check_in: function(frm) {
		if (frm.doc.check_in < frappe.datetime.get_today()) {
			frm.doc.check_in = "";
			cur_frm.refresh_fields();
			frappe.throw(__("You can not select past date"));
		}
	},
	check_out: function(frm) {
		if (frm.doc.check_out < frm.doc.check_in) {
			frm.doc.check_out = "";
			cur_frm.refresh_fields();
			frappe.throw(__("Invalid Check Out date"));
		}
	}
});
