$("#formaction").validate({
  rules: {
    name: {
      minlength: 1,
    },
    email: true,
    phone: {
      minlength: 10,
      maxlength: 12,
      number: true,
    },
  },
  messages: {
    name: {
      required: "Please Enter valid name",
      minlength: "2 char",
    },
    email: "please enter valid email",
    userName: "Please valid userName",
    phone: "please enter valid Phone Number",
  },
  submitHandler: function (form) {
    form.submit();
  },
});
