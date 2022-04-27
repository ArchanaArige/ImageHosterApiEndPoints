const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManufacturerSchema = new Schema({
  docType: {
    type: String,
  },
  basicDetails: {
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    emailId: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  storageUnits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StorageUnit",
    },
  ],
  products: {
    automationIntegration: {
      systemTool: {
        type: String,
      },
      authenticationType: {
        type: String,
      },
      hostAddress: {
        type: String,
      },
      userName: {
        type: String,
      },
      password: {
        type: String,
      },
      port: {
        type: String,
      },
      existingSystemData: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        }
      ]
    },
    excelData: {
      fileName: "",
      fileData: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      ],
    },
  },
  status: {
    type: String,
    default: "Active",
  },
});

module.exports = Manufacturer = mongoose.model(
  "Manufacturer",
  ManufacturerSchema
);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  phone: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },

  emailverified: {
    type: String,
    default: "no",
  },
  accountactivated: {
    type: String,
    default: "no",
  },
  verificationkey: {
    type: String,
    default: "NA",
  },
  passkey: {
    type: String,
    default: "",
  },
  organizationId: {
    type: Schema.Types.ObjectId,
    ref: "Organization",
  },
  roleId: {
    type: Schema.Types.ObjectId,
    ref: "Role",
  },
  categoryName: {
    type: String,
  },
  subCategory: {
    type: String,
  },
  assignTo: {
    type: Schema.Types.ObjectId,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  vendorType: {
    type: String,
  },
  vendorName: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  update: {
    type: Date,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  points: {
    type: Number,
    default: 0,
  },
  earnedRewards: {
    type: Number,
    default: 0,
  },
  redeemRewards: {
    type: Number,
    default: 0,
  }
});

module.exports = User = mongoose.model("User", UserSchema);

