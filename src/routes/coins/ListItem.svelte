<article class="coin-card">
  <slot name="button">
    <span class="missing">btn</span>
  </slot>
  <div class="coin-header">
    <h2>
      <slot name="coinName">
        <span class="missing">Unknown coin</span>
      </slot>
    </h2>

    <div>
      <slot name="coinPrice">
        <span class="missing">Unknown coin</span>
      </slot>
    </div>

    <div>
      <slot name="change">
        <span class="missing">~ %</span>
      </slot>
    </div>
  </div>

  <div class="volumen">
    <slot name="volumen">
      <span class="missing">Unknown VOL</span>
    </slot>
  </div>

  <div class="marketCap">
    <slot name="marketCap">
      <span class="missing">Unknown market cap</span>
    </slot>
  </div>
</article>

<style>
  .coin-card {
    width: 300px;
    border: 1px solid #aaa;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;
    margin-top: 10px;
  }

  .coin-header {
    display: flex;
    justify-content: space-between;
    padding: 0 6px;
    margin: 0 0 8px;
    border-bottom: 1px solid #ff3e00;
  }

  h2 {
    margin: 0 0 0.4em 0;
    /* border-bottom: 1px solid #ff3e00; */
  }

  .volumen,
  .marketCap,
  .change {
    padding: 0 0 0 1.5em;
    margin: 0 0 0.5em 0;
    background: 0 0 no-repeat;
    background-size: 20px 20px;
    line-height: 1.2;
  }

  /* .address { background-image: url(/tutorial/icons/map-marker.svg) }
	.email   { background-image: url(/tutorial/icons/email.svg) } */
  .missing {
    color: #999;
  }
  .change-postive {
    color: green;
  }
</style>
