<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-pages">
          <img src="../../../../assets/images/icon/wi-1.png" alt="">
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="1000" :duration="2600" class="card-panel-num" />
          <div class="card-panel-text">
            Pages
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('messages')">
        <div class="card-panel-icon-wrapper icon-image">
          <img src="../../../../assets/images/icon/wi-2.png" alt="">
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="1200" :duration="3000" class="card-panel-num" />
          <div class="card-panel-text">
            Images
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-icon-wrapper icon-document">
          <img src="../../../../assets/images/icon/wi-3.png" alt="">
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="850" :duration="3200" class="card-panel-num" />
          <div class="card-panel-text">
            Documents
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-icon-wrapper icon-total-completed">
          <img src="../../../../assets/images/icon/wi-4.png" alt="">
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="1400" :duration="3600" class="card-panel-num" />
          <div class="card-panel-text">
            Completed
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-pages {
        background: #777c85;
      }

      .icon-image {
        background: #4D614E;
      }

      .icon-document {
        background: #6F3E4F;
      }

      .icon-total-completed {
        background: #3E645F
      }
    }

    .icon-pages {
      color: #40c9c6;
    }

    .icon-image {
      color: #36a3f7;
    }

    .icon-document {
      color: #f4516c;
    }

    .icon-total-completed {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: .5rem;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-top: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
