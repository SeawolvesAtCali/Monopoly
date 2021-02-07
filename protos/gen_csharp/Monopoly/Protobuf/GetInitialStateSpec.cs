// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: monopoly/get_initial_state_spec.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Monopoly.Protobuf {

  /// <summary>Holder for reflection information generated from monopoly/get_initial_state_spec.proto</summary>
  public static partial class GetInitialStateSpecReflection {

    #region Descriptor
    /// <summary>File descriptor for monopoly/get_initial_state_spec.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static GetInitialStateSpecReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiVtb25vcG9seS9nZXRfaW5pdGlhbF9zdGF0ZV9zcGVjLnByb3RvEghtb25v",
            "cG9seRoYcHJpc2VsL2Fubm90YXRpb25zLnByb3RvGhptb25vcG9seS9nYW1l",
            "X3BsYXllci5wcm90byJ0ChdHZXRJbml0aWFsU3RhdGVSZXNwb25zZRIlCgdw",
            "bGF5ZXJzGAEgAygLMhQubW9ub3BvbHkuR2FtZVBsYXllchIXCg9maXJzdF9w",
            "bGF5ZXJfaWQYAiABKAk6GZq1GBUKEWdldF9pbml0aWFsX3N0YXRlEAJCFKoC",
            "EU1vbm9wb2x5LlByb3RvYnVmYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Prisel.Protobuf.AnnotationsReflection.Descriptor, global::Monopoly.Protobuf.GamePlayerReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Monopoly.Protobuf.GetInitialStateResponse), global::Monopoly.Protobuf.GetInitialStateResponse.Parser, new[]{ "Players", "FirstPlayerId" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class GetInitialStateResponse : pb::IMessage<GetInitialStateResponse>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<GetInitialStateResponse> _parser = new pb::MessageParser<GetInitialStateResponse>(() => new GetInitialStateResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GetInitialStateResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Monopoly.Protobuf.GetInitialStateSpecReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetInitialStateResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetInitialStateResponse(GetInitialStateResponse other) : this() {
      players_ = other.players_.Clone();
      firstPlayerId_ = other.firstPlayerId_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GetInitialStateResponse Clone() {
      return new GetInitialStateResponse(this);
    }

    /// <summary>Field number for the "players" field.</summary>
    public const int PlayersFieldNumber = 1;
    private static readonly pb::FieldCodec<global::Monopoly.Protobuf.GamePlayer> _repeated_players_codec
        = pb::FieldCodec.ForMessage(10, global::Monopoly.Protobuf.GamePlayer.Parser);
    private readonly pbc::RepeatedField<global::Monopoly.Protobuf.GamePlayer> players_ = new pbc::RepeatedField<global::Monopoly.Protobuf.GamePlayer>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Monopoly.Protobuf.GamePlayer> Players {
      get { return players_; }
    }

    /// <summary>Field number for the "first_player_id" field.</summary>
    public const int FirstPlayerIdFieldNumber = 2;
    private string firstPlayerId_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string FirstPlayerId {
      get { return firstPlayerId_; }
      set {
        firstPlayerId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GetInitialStateResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(GetInitialStateResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!players_.Equals(other.players_)) return false;
      if (FirstPlayerId != other.FirstPlayerId) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= players_.GetHashCode();
      if (FirstPlayerId.Length != 0) hash ^= FirstPlayerId.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      players_.WriteTo(output, _repeated_players_codec);
      if (FirstPlayerId.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(FirstPlayerId);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      players_.WriteTo(ref output, _repeated_players_codec);
      if (FirstPlayerId.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(FirstPlayerId);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      size += players_.CalculateSize(_repeated_players_codec);
      if (FirstPlayerId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(FirstPlayerId);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(GetInitialStateResponse other) {
      if (other == null) {
        return;
      }
      players_.Add(other.players_);
      if (other.FirstPlayerId.Length != 0) {
        FirstPlayerId = other.FirstPlayerId;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            players_.AddEntriesFrom(input, _repeated_players_codec);
            break;
          }
          case 18: {
            FirstPlayerId = input.ReadString();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            players_.AddEntriesFrom(ref input, _repeated_players_codec);
            break;
          }
          case 18: {
            FirstPlayerId = input.ReadString();
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code