<article class="contact-card">
  <h2>
    <slot name="coinName">
      <span class="missing">Unknown coin</span>
    </slot>
  </h2>

  <div class="volumen">
    <slot name="volumen">
      <span class="missing">Unknown volume</span>
    </slot>
  </div>

  <div class="marketCap">
    <slot name="marketCap">
      <span class="missing">Unknown market cap</span>
    </slot>
  </div>

  <div class="change">
    <slot name="change">
      <span class="missing">Unknown %</span>
    </slot>
  </div>
</article>

<style>
  .contact-card {
    width: 300px;
    border: 1px solid #aaa;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;
    margin-top: 10px;
  }

  h2 {
    padding: 0 0 0.2em 0;
    margin: 0 0 1em 0;
    border-bottom: 1px solid #ff3e00;
  }

  .volumen,
  .marketCap,
  .change {
    padding: 0 0 0 1.5em;
    background: 0 0 no-repeat;
    background-size: 20px 20px;
    margin: 0 0 0.5em 0;
    line-height: 1.2;
  }

  /* .address { background-image: url(/tutorial/icons/map-marker.svg) }
	.email   { background-image: url(/tutorial/icons/email.svg) } */
  .missing {
    color: #999;
  }
</style>
