frappe.listview_settings['Hotel Booking'] = {
  // add_fields: ["status", "produciton_item", "weight", "qty","produced_qty", "planned_start_date", "expected_delivery_date"],
  filters: [["status", "!=", "Cancelled"]],
get_indicator: function(doc) {
  if(doc.status==="Submitted") {
    return [__("Booked"), "blue", "status,=,Submitted"];
  } else {
    return [__(doc.status), {
      "Draft": "red",
      "Booked": "blue",
      "To Check Out": "orange",
      "Completed": "green",
      "Cancelled": "red"
    }[doc.status], "status,=," + doc.status];
  }
}//*/
};