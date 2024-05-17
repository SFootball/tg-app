// ID               primitive.ObjectID  `bson:"_id" json:"id"`
// CreatedAt        time.Time           `bson:"created_at" json:"created_at"`
// UpdatedAt        time.Time           `bson:"updated_at" json:"updated_at"`
// TGID             int64               `bson:"tg_id" json:"tg_id"`
// TGUsername       string              `bson:"tg_username" json:"tg_username"`
// ParentID         *primitive.ObjectID `bson:"parent_id" json:"parent_id"`
// TonWalletAddress string              `bson:"ton_wallet_address" json:"ton_wallet_address"`
// FirstName        string              `bson:"first_name" json:"first_name"`
// LastName         string              `bson:"last_name" json:"last_name"`
// MidleName        string              `bson:"midle_name" json:"midle_name"`
// Username         string              `bson:"username" json:"username"`
// Password         string              `bson:"password" json:"password"`
// Email            string              `bson:"email" json:"email"`
export type UserType = {
  id: string;
  created_at: string;
  update_at: string;
  tg_id: number;
  tg_username: string;
  parent_id: string;
  ton_wallet_address: string;
  firstName: string;
  lastName: string;
  midleName: string;
  username: string;
  password: string;
  email: string;
};
