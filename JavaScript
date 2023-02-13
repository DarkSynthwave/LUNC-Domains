<script>
  const form = document.querySelector("form");
  const domainNameInput = document.querySelector("#domain-name");
  const bidInput = document.querySelector("#bid");
  const emailInput = document.querySelector("#email");
  const walletAddressInput = document.querySelector("#wallet-address");
  const submitButton = document.querySelector("button");
  let minimumBid = 195.00;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const domainName = domainNameInput.value;
    const bid = parseFloat(bidInput.value);
    const email = emailInput.value;
    const walletAddress = walletAddressInput.value;

    if (!domainName || !bid || !email || !walletAddress) {
      alert("Please fill in all the fields");
      return;
    }

    if (bid < minimumBid) {
      alert(`Bid must be at least $${minimumBid}`);
      return;
    }

    if ((bid - minimumBid) % 5 !== 0) {
      alert("Bid must be increased by no less than $5.00 each time");
      return;
    }

    // Check if domain name, email, or wallet address has already been used
    // TODO

    // Submit the form
    // TODO

    alert("Form submitted successfully");
  });
</script>
