// Copyright (c) 2021, Eco Data and contributors
// For license information, please see license.txt

frappe.ui.form.on('Hotel Booking', {
  	guest_id: function(frm){
    	var image_html = '<img src="' + frm.doc.guest_photo_attachment + '">';
   		$(frm.fields_dict['guest_photo'].wrapper).html(image_html);
    	frm.refresh_field('guest_photo');
  	},

  	refresh: function(frm){  
	    var image_html = '<img src="' + frm.doc.guest_photo_attachment + '">';
	    $(frm.fields_dict['guest_photo'].wrapper).html(image_html);
	    frm.refresh_field('guest_photo');
	 },

	validate: function(frm){
	    for (var i in frm.doc.booking){
	      if (frm.doc.booking[i].male == 0 && frm.doc.booking[i].female == 0){
	        frappe.throw('Please Enter Guests Details for Room ' + frm.doc.booking[i].room_no);
	      }
	    }
	},
	total_amount: function(frm){
	    var temp_total_amount = 0;
	    for (var i in frm.doc.booking){
	      if (frm.doc.booking[i].price){
	        temp_total_amount += frm.doc.booking[i].price;
	      }
	    }
	    frm.doc.total_amount = temp_total_amount;
	    frm.refresh_field('total_amount');
	}
});

frappe.ui.form.on('Hotel Booking Rooms', {
	check_in: function(doc, cdt, cdn) {
		var child = locals[cdt][cdn];
		if (child.check_in < frappe.datetime.get_today()) {
			child.check_in = "";
			cur_frm.refresh_fields();
			frappe.throw(__("You can not select past date"));
		}
	},
	check_out: function(doc, cdt, cdn) {
		var child = locals[cdt][cdn];
		if (child.check_out < child.check_in) {
			child.check_out = "";
			cur_frm.refresh_fields();
			frappe.throw(__("Invalid Check Out date"));
		}
	},
	room_no: function(doc, cdt, cdn){
		var child = locals[cdt][cdn];
		frappe.call({
			method: 'hotel_management.hotel_management.doctype.hotel_booking.hotel_booking.get_bookings',
			args:{"start":child.check_in,
			"end": child.check_out,
			"room": child.room_no
		},
		callback: function(r){
			/*child.check_in = "";
			child.check_out = "";
			child.room_no = "";*/
			cur_frm.refresh_fields();
		}
	});
	}
});