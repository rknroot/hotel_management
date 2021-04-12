frappe.listview_settings['Rooms'] = {
  // add_fields: ["room_status", "produciton_item", "weight", "qty","produced_qty", "planned_start_date", "expected_delivery_date"],
  filters: [["room_status", "!=", "Available"]],
get_indicator: function(doc) {
  if(doc.docstatus==="0") {
    return [__("Available"), "green", "room_status,=,Available"];
  } else {
    return [__(doc.room_status), {
      "Booked": "blue",
      "Checked In": "orange",
      "Available": "green",
      "Room Service": "red"
    }[doc.room_status], "room_status,=," + doc.room_status];
  }
}//*/
};