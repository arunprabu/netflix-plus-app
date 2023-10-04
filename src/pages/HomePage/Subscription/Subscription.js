import styles from './Subscription.module.css';

const Subscription = () => {

  // Internal Styles
  const subscriptionStyles = {
    couponStyles: {
      color: '#000',
      backgroundColor: 'yellow',
      padding: '20px',
      border: 'dashed 5px red'
    },
    btnStyles: {
      border: "solid 2px red",
      backgroundColor: "red",
      color: "#fff",
      padding: "10px 20px",
    }
  }

  // TODO: LEARN ABOUT styled-components 

  return (
    // using external styles from bootstrap
    <div className="text-center">
      {/* External CSS -- Refer Subscription.module.css - RECOMMENDED*/}
      <h4 className={styles.subscriptionInfo}>
        You are an active subscriber of Netflix Pro
      </h4>
      {/* Inline Styles -- NEVER EVER TRY THIS IN LISTS & KEYS */}
      <p
        style={{
          color: "#fff",
          backgroundColor: "red",
          borderRadius: "10px",
          padding: "20px 10px",
        }}
      >
        Your subscription will end in 15 days!
      </p>
      {/* Internal Styles */}
      <p style={subscriptionStyles.couponStyles}>
        Renew Now at 50% offer. Apply Coupon: OFFER50
      </p>

      <button style={subscriptionStyles.btnStyles}>RENEW NOW</button>
    </div>
  );
}

export default Subscription;
